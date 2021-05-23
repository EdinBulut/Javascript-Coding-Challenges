/*
Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

Examples:

hello "john"   => "Hello, John!"
hello "aliCE"  => "Hello, Alice!"
hello          => "Hello, World!" # name not given
hello ""       => "Hello, World!" # name is an empty String
*/



function hello(name) {
  text = ''
  if(name === '' || name === undefined) text = `Hello, World!`
  else {
    name = name.toLowerCase().split('')
    name[0] = name[0].toUpperCase()
    name = name.join('')
    text = `Hello, ${name}!`
  }
  console.log(text);
  return text
}

hello('john')
hello('aliCE')
hello('')
hello()