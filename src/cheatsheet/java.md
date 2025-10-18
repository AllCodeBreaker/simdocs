## Java 

### Structure 

<pre>
public class Main{
    public static void main(String[] args){
       System.out.println("Hello, World!"); 
   }
}
</pre>

This is a simple Hello World Program.


### Data Types and Variables
Data type specifies the types of data which a variable can hold. Data types are categorized into two types:
<ul>
    <li><a href="#primitive">Primitive</a></li>
    <li><a href="#non-primitive">Non Primitive</a></li>
</ul>


<h4 id="primitive">Primitive Data Types</h4>
Primitive data type variable store value not address
Java has 8 primitive data types:

| Data Type | Description | Range | Example |
|:---------:|:-----------:|:-----:|:-------:|
| `byte` | 8-bit integer |  | `byte b = 100;` |
| `short` | 16-bit integer | | `short s = 1000;` |
| `int` | 32-bit integer | | `int i = 50000;` |
| `long` | 64-bit integer | | `long l = 50000l;` |
| `float` | 32-bit decimal | | `float f = 3.14f;` |
| `double` | 64-bit decimal | | `double d = 5.362;` |
| `char` | single 16-bit Unicode Character | | `char c = 'A';` |
| `boolean` | true or false | | `boolean b = true;` |


<h4 id="non-primitive">Non Primitive (Reference) Data Types</h4>
Non primitive data types stores reference (address) instead of data. In fact, all the non primitive variables are a instance of a class.

| Data Type | Description | Example |
|----------:|:-----------:|:-------:|
| `String` | Sequence of characters | `String name = "Java";` |
| `Array` | Collection of elements of same data type storded in a continuous memory location | `int[] nums = {1,2,3}`|
| `Enum` | Fixed set of constants | `Day d = DAY.MONDAY;` |
