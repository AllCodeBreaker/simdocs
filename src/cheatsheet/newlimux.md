## Linux Commands Cheatsheet


## Basic Commands

### ls [OPTIONS] [directory]
list contents in directory.

| OPTIONS | DESCRIPTION |
|---------|-------------|
| `ls` | List all files in curre|
| `ls /etc` | list files in /etc directory |
| `ls -a` | Show files including hidden files (starts with a dot(.) |
| `ls -l` | Show files long detailed format |
| `ls -R` | Show all files with sub-directory |
| `ls -la` | Combine `-l` and `-a` |




### cd [directory]
Change to another directory
| OPTIONS | DESCRIPTION |
|---------|-------------|
| `cd ..` | Go back to previous directory |
| `cd path` | Go to path directory |
| `cd ~` | Go to home directory |

### pwd 
Prints current working directory
>$ pwd <br />
> /home/usr/

### cp [OPTIONS] <source> <destination>
Makes a copy or directory from one to another place.
| OPTIONS | DESCRIPTION |
|---------|-------------|
| `cp file1.txt file2.txt` | Create a copy (duplicate) of `file1.txt` as `file2.txt`  |
| `cp file1.txt dir/file2.txt` | Create a copy of `file1.txt` as `file2.txt` inside `dir` directory |
| `cp -r dir1 dir2` | Copy `dir1` directory as `dir2` recursively |
| `cp -i file1.txt file2.txt` | Ask before overriding existing file|
| `cp -v file1.txt file2.txt` | Show whats being copied |
| `cp -riv dir1 dir2` | Combine `-r`,`-i`, and `-v` flags |

 
### mv [OPTIONS] <source> <destination>
Move file or directory from one place to another.

| OPTIONS | DESCRIPTION |
|---------|-------------|
| `mv file1.txt file2.txt` | Rename `file1.txt` as `file2.txt` | 
| `mv file1.txt dir/` | Move `file1.txt` to `dir` directory |
| `mv -i file1.txt dir/` | Ask before overriding existing file |
| `mv -v dir1 dir2` | Sow what's being moved |


### rm
Remove or Delete a file

### mkdir 
Create a new empty directory (folder)

### rmdir
Removes a empty directory (folder)

### cat
Displays the content of the file 

### less 


### more


### head


### tail


### grep


### sed


### awk


### echo 


### which


### type


### chmod 


### chown


### ps


### kill


### top


## Networking
