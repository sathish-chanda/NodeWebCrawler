The implementation of the project consists of the following steps:

1. Create the project folder and make a file in it. The name doesn't matter.
2. Create a package.json file using npm init -y
3. Install a module uuid for generating random timestamped values which we will use for folder names
4. Create a script file which downloads a page at a given URL and writes page's HTML to a file. URL must be provided from the command-line argument.

How to Run:

1. Open the command prompt in the project folder.
2. node download.js url
   i.e. node download.js http://www.google.com

This results in creating a unique folder in the current directory using 'uuid' version 1 module which uses system clock to generate random values.
Stores the result in file.html file and url in url.txt file.