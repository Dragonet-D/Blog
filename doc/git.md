# git 使用心得

## git 流程图

![](https://user-gold-cdn.xitu.io/2020/6/15/172b390eab77fcbd?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

- `Workspace` 工作区
- `Index / Stage` 暂存区
- `Repository` 仓库区(或本地仓库)
- `Remote` 远程仓库

## 配置 git

1. 配置全局用户

```shell script
git config --global user.name "用户名"
```

2. 配置别名

```shell script
git config --global alias alias.co checkout
```

3. 删除全局配置

```shell script
git config --global --unset alias.xxx
```

## 查看 git 信息

1. 查看系统配置

```shell script
git config --list
```

2. 查看用户配置

```shell script
cat ~/.gitconfig
```

3. 查看当前项目的 git 配置

```shell script
cat .git/config
```

4. 暂存区中的文件

```shell script
git ls-files
```

5. 查看本地 git 命令历史

```shell script
git reflog
```

6. 查看所有 git 命令

```shell script
git --help -a
```

7. 查看当前 HEAD 指向

```shell script
cat .git/HEAD
```

8. git 中 D 向下翻一行, F 向下翻页, B 向上翻页, Q 退出
9. 查看提交历史

```shell script
git log --oneline # 一行一行的显示
        --grep="关键字" # 查找关键字(提交的注释)与关键字有关的记录
        --graph # 图形化显示
        --all # 所有记录显示出来
        --author "username" # 查找这个作者的记录
        --reverse # 提交顺序翻转
        --num # 显示最近的多少条提交记录
        --p # 每次提交所引入的差异(按补丁的格式输出)
        --before= 1 day/a week/1 "2020-06-19" # 查找规定的时间(如: 1天/1周)之前的记录
        --stat # 显示每次更新文件修改统计信息,会列出具体文件列表
        --pretty=format:"xx" # 可以定制要显示的记录格式
```
