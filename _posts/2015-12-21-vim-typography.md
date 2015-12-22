---
layout: post
title: "Vim Typography: Better Readability and Look"
date: 2015-12-21
---

A few tricks to improve your Vim editor's readability and theming. 
All examples are for editing <code>.vimrc</code> and <code>.gvimrc</code> files.

<code>.gvimrc</code> is for GUI specific commands.
For instance, you should use it for things that you want to see in gVim or MacVim
and can't or don't want to use when Vim is running via terminal.


## GUI Specific:

 

### Theming (syntax highlighter) 

{% highlight vim %}
syntax enable
set background=dark
colorscheme themeName 
{% endhighlight %}

Color schemes are stored in <code>.vim/colors</code> folder.


### Fonts

{% highlight vim %}
set guifont=Droid\ Sans\ Mono\ 14
{% endhighlight %}
or
{% highlight vim %}
set guifont=DejaVu\ Sans\ Mono:h13
{% endhighlight %}

As you can see, when there are spaces in a font name, you have to use
<code>\</code> before them. There are also system differences when it comes to picking size. 

This is an example of setup for many operating systems:
{% highlight vim %}
if has("gui_gtk2")
  set guifont=Droid\ Sans\ Mono\ 13
elseif has("gui_macvim")
  set guifont=Menlo\ Regular:h14
elseif has("gui_win32")
  set guifont=Consolas:h11:cANSI
endif
{% endhighlight %}

### Linespace (almost like line-height in CSS)

{% highlight vim %}
linespace=4
{% endhighlight %}

<code>Linespace</code> property doesn't work exactly like
<code>line-height</code> in CSS.
It sets the space between lines, not leading.

The default is 0. I like to use something around 4 or 5&mdash;it depends on
the font face.


## General:

### Terminal vs GUI

Things listed below don't look as well in a terminal as in a GUI rich editor
with a nice theme:

- error highlighting (ie: spellcheck),
- character limit line,
- current line highlight (not so bad but still worst than GUI apps).

Sometimes they work more like distractions than like handy hits.
Consider using some of them in <code>.gvimrc</code> instead of <code>.vimrc</code>.


### Characters per line limit

Set and show 80 characters limit. 

{% highlight vim %}
set textwidth=80
set colorcolumn=+1  
{% endhighlight %}

You'll see a line after 80th column.

### Line Numbers 

{% highlight vim %}
set number          " show line numbers
set numberwidth=4   " width of number bar
{% endhighlight %}

### Text Highlighting

{% highlight vim %}
set cursorline      " highlight current line
set showmatch       " highlight matching <[{()}]>
{% endhighlight %}


### Autoindenting 

{% highlight vim %}
set autoindent      " set autoindenting on
set copyindent      " copy the indentation from previous line
{% endhighlight %}


### Spell Check + Word Completion

{% highlight vim %}
set spell spelllang=en_us
set complete+=kspell 
{% endhighlight %}

Press CTRL-N or CTRL-P in insert-mode to complete current word.


					
						


