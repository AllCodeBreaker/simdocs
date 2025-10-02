<!-- 
.output => Coding output
pre => Coding 
.note => Note important points


 -->


## Bash Cheatsheet

Bash (Bourne Again SHell) is a Unix shell and command language. Its just a collection of Unix commands with some programming functionalities like variables, loop, etc.


### Getting Started

Copy the code into a file named as <b>hello.sh</b>

<pre>
#!/bin/bash
echo "Hello, World!"
</pre>

Give execution permission and execute.

<pre>
$chmod +x hello.sh
$bash hello.sh
</pre>

<code class="output">
Hello, World!
</code>

<div class="note">
    <b>NOTE:</b> As i mentioned above, Bash is a UNIX based command with programming functionalities. Having a basic knowledge in UNIX is mandatory. 
</div>


### Variables and Datatypes

#### Creating Variable

##### Syntax
<pre>
name="allCodeBreaker"
</pre>


<!-- 
Parameter expansion / Modifiers

${VAR} - basic expansion
${VAR:- default} - use default of VAR is unset or null
${VAR:=default} - assign default to VAR if unset/null
${VAR:+other} - expand to other if VAR is set
${#VAR} - length of VAR
${VAR:offset:length} - substring
${VAR%pattern}, ${VAR%%pattern}, ${VAR#pattern}, ${VAR##pattern} - remove patterns from front/end 

 -->


### Conditionals

#### if statements

##### Syntax:
<pre>
if [ condition ]; then
    #code
elif [ other_condition ]; then
    #other code
else
    #another code
fi
</pre>

<!-- 
Comparisions  

-eq, -ne, -lt, -gt, -le, -ge

For Numbers:
    =, !=, <, > for strings (in [[]] )

File Properties: 
    -f file,
    -d dir
    -r file
    -w
    -x etc

-->


<!-- Case Statement -->



#### Loops (for, while, until)

##### Syntax (for)
<pre>
for item in sequence; do
    echo $item
done
</pre>