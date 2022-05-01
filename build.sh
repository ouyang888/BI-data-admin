#!/bin/bash
TAG_NAME=$(git describe --abbrev=0 --tags)
echo $TAG_NAME
UAT="uat"
result=$(echo $TAG_NAME | grep "${UAT}")
npm install
npm run build
if [[ "" != $result ]]
then
    echo "uat环境部署"
	rm -rf inspectionClient-uat/
	echo "删除文件夹"
    cp -rf inspectionClient/ inspectionClient-uat/
	echo "复制文件夹"
    rsync -avz --password-file=/data/rsync_deploy.password inspectionClient-uat deploy@10.111.202.70::lpdmgr_deploy
	echo "传送文件夹"
else
    echo "sit环境部署"
    cp -rf inspectionClient/ inspectionClient/
	echo "复制文件夹"
    rsync -avz --password-file=/data/rsync_deploy.password inspectionClient deploy@10.111.202.70::lpdmgr_deploy
	echo "传送文件夹"
fi