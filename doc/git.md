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

## Git 常用命令

1. 将本地分支和远程分支进行关联

```shell script
git push -u origin branchName
```

2. 临时将工作区文件的修改保存至堆栈中

```shell script
git stash
```

3. 将之前保存在堆栈中的文件取出来

```shell script
git stash pop
```

#### commit

1. 跳过验证继续提交

```shell script
git commit --no-verify
git commit -n
```

2. 编辑器会弹出上一次提交的信息,可以在这里修改提交信息

```shell script
git commit --amend
```

3. 修复提交, 同时修改提交信息

```shell script
git commit --amend -m "本次提交的说明"
```

4. 加入--no-edit 标记会修复提交但不修改提交信息,编辑器不会弹出上一次的信息

```shell script
git commit --amend --no-edit
```

git commit --amend 既可以修改上次提交的文件内容，也可以修改上次提交的说明。会用一个新的 commit 更新并替换最近一次提交的 commit 。如果暂存区有内容，这个新的 commit 会把任何修改内容和上一个 commit 的内容结合起来。如果暂存区没有内容，那么这个操作就只会把上次的 commit 消息重写一遍。`永远不要修复一个已经推送到公共仓库中的提交，会拒绝推送到仓库`

#### push && pull

1. 不管是否存在对应的远程分支,将本地的所有分支都推送到远程主机

```shell script
git push --all origin
```

2. 等同于 fetch + merge

```shell script
git fetch origin branchName
git merge origin/branchName
```

3. 如果远程主机的版本比本地版本新, 推送时 Git 会报错,要求先在本地做 git pull 合并差异,然后再推送到远程主机.这时,如果你一定要推送,可以使用--force 选项

```shell script
git push --force origin | git push -f origin
```

#### branch

1. 查看远程分支

```shell script
git branch -r
```

2. 查看所有分支

```shell script
git branch -a
```

3. 查看所有分支并带上最新的提交信息

```shell script
git branch -av
```

4. 查看本地分支对应的远程分支

```shell script
git branch -vv
```

5. 新建分支

```shell script
git branch branchName
git checkout branchName
git checkout -b branchName # 新建一个分支并切换过去
git checkout -b BranchName master # 基于master分支建一个分支,并且切换到该分支

# 新建一条空分支
git checkout --orphan emptyBeanchName
git rm -rf .
```

6. 删除分支

```shell script
# 删除本地分支,会阻止删除包含未合并更改的分支
git branch -d branchName
# 强制删除分支,即使包含未合并的更改
git branch -D branchName
# 推送一个空分支到远程分支,其实就相当于删除远程分支
git push origin :远程分支名
git push origin --delete 远程分支名
```

7. 修改分支名

```shell script
git branch -m branchName
```

## merge 三种合并方法

![](https://user-gold-cdn.xitu.io/2020/6/15/172b390eac6f9586?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

```shell script
# 默认fast-forward, HEAD指针直接指向被合并的分支
git merge

# 禁止快进式合并
git merge --no-ff
git merge --squash
```

- `fast-forward`: 会在当前分支的提交历史中添加进被合并分支的提交历史(并不是每次 merge 都会发生快速合并)
- `--no-ff`: 会生成一个新的提交, 让当前分支的提交历史不会那么乱;
- `squash`: 不会生成新的提交, 会将合并分支多次提交的内容直接存到工作区和暂存区,由开发者手动去提交,这样当前分支最终只会多出一条提交记录,不会掺杂被合并分支的提交历史;

## stash

```shell script
# 给本次存储加个备注, 以防时间久了忘记
git stash save "存储"
# 存储未追踪到的文件
git stash -u
# 查看存储记录
git stash list

# 在 Windows 上和 PowerShell 中, 需要加上双引号

# 恢复后, stash 记录并不删除
git stash apply "stash@{index}"

# 恢复的同时把stash 记录也删了
git stash pop "stash@{index}"

# 删除 stash 记录
git stash drop "stash@{index}"

# 删除所有存储的进度
git stash clear

# 查看当前记录中修改了那些文件
git stash show "stash@{index}"

# 查看当前记录中修改了哪些文件的内容
git stash show -p "stash@{index}"
```

## diff

```shell script
# 查看工作区和暂存区单个文件的对比
git diff fileName
# 查看工作区和暂存区所有文件的对比
git diff
# 查看工作区和暂存区所有文件的对比,并显示出所有有差异的文件列表
git diff --stat
```
1, 你修改了某个文件, 但是没有提交到暂存区,这时候会有对比的内容,一旦提交到暂存区,就不会有对比的内容(因为暂存区已经更新)
2, 如果你新建了一个文件,但是没有提交到暂存区,这时候diff是没有结果的

```shell script
# 查看暂存区与上次提交到本地仓库的快照(即最新提交到本地仓库的快照)的对比
git diff --cached/--staged
# 查看工作区与上次提交到本地仓库的快照(即最新提交到本地仓库的快照)的对比
git diff branchName
# 查看工作区与HEAD指向(默认当前分支最新的提交)的对比
git diff HEAD
```

```shell script
# 查看两个本地分支中某一个文件的对比
git diff branchName .. branchName fileName
# 查看两个本地分支所有的对比
git diff branchName .. branchName
# 查看远程分支和本地分支的对比
git diff origin/branchName .. branchName
# 查看远程分支和远程分支的对比
git diff origin/branchName..origin/branchName
```

```shell script
# 查看两个commit的对比
git diff commit1..commit2
```

## remote
```shell script
# 查看所有远程主机
git remote
# 查看关联的远程仓库的详细信息
git remote -v
# 删除远程仓库的"关联"
git remote rm projectName
# 设置远程仓库的"关联"
git remote set-url origin <newUrl>
```