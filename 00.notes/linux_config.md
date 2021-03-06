=========================================================================================
1. vimrc

set number
set hls is
set nocompatible
set backspace=indent,eol,start
set tabstop=4

syntax on
colorscheme desert

inoremap <C-s> <esc>:w<cr>                 " save files
nnoremap <C-s> :w<cr>
inoremap <C-d> <esc>:wq!<cr>               " save and exit
nnoremap <C-d> :wq!<cr>
inoremap <C-q> <esc>:qa!<cr>               " quit discarding changes
nnoremap <C-q> :qa!<cr>

set shiftwidth=4
set autoindent
set expandtab


=========================================================================================
2. inputrc

set completion-ignore-case on

=========================================================================================
3. pip3 replace source 
  lists:
    清华：https://pypi.tuna.tsinghua.edu.cn/simple
    阿里云：http://mirrors.aliyun.com/pypi/simple/
    中国科技大学 https://pypi.mirrors.ustc.edu.cn/simple/
    华中理工大学：http://pypi.hustunique.com/
    山东理工大学：http://pypi.sdutlinux.org/ 
    豆瓣：http://pypi.douban.com/simple/
  manual:
    ~/.pip/pip.conf
**********************************************************
[global]
index-url = https://pypi.tuna.tsinghua.edu.cn/simple

[install]
trusted-host=mirrors.aliyun.com
**********************************************************

=========================================================================================
4. Sublime key settings -- jump out symbols
[
	{"keys": ["enter"], "command": "move", "args": {"by": "characters", "forward": true}, "context":
		[
			{ "key": "following_text", "operator": "regex_contains", "operand": "^[)\\]\\>\\'\\\"\\ %>\\}\\;\\,]", "match_all": true },
			{ "key": "preceding_text", "operator": "not_regex_match", "operand": "^.*\\{$", "match_all": true  },
			{ "key": "auto_complete_visible", "operator": "equal", "operand": false }
		]
	}
]

=========================================================================================
5. github add sshkeys
https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh

=========================================================================================
6. anaconda
conda config --set auto_activate_base false
