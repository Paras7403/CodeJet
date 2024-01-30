// import React from "react";

// import Editor from "@monaco-editor/react";

// const EditorWindow = ({ onChange, language, code}) => {
// //   const [value, setValue] = useState(code || "");

//   const handleEditorChange = (value) => {
//     // setValue(value);
//     onChange(value);
//   };

//   return (
//     <div className="devEditorContainer">
//       <Editor
//         height="80dvh"
//         width={`100%`}
//         language={language || "javascript"}
//         value={code}
//         theme='vs-dark'
//         onChange={(value)=>{handleEditorChange(value)}}
//       />
//     </div>
//   );
// };
// export default EditorWindow;
import React from 'react';
import Editor from '@monaco-editor/react';

export const defaultCodes = {
  javascript: `console.log("Welcome to CodeJet:) Developed by Paras Jain");`,
  java: `class Main{
  public static void main(String[] args){
    System.out.println("Welcome to CodeJet:) Developed by Paras Jain");
  }
}`,
  cpp:`#include <iostream>
int main() {
  std::cout << "Welcome to CodeJet:) Developed by Paras Jain" << std::endl;
  return 0;
}`,
c:`#include <stdio.h>
int main() {
  printf("Welcome to CodeJet:) Developed by Paras Jain");
  return 0;
}`,
csharp:`using System;
class MainClass {
    public static void Main (string[] args) {
        Console.WriteLine("Welcome to CodeJet:) Developed by Paras Jain");
    }
}`,
go:`package main
import "fmt"
func main() {
    fmt.Println("Welcome to CodeJet:) Developed by Paras Jain")
}`,
kotlin:`fun main() {
  println("Welcome to CodeJet:) Developed by Paras Jain")
}`,
python:`print("Welcome to CodeJet:) Developed by Paras Jain")`,
swift:`print("Welcome to CodeJet:) Developed by Paras Jain")`,
typescript:`console.log("Welcome to CodeJet:) Developed by Paras Jain");`,
sql:``,
scala:`object Main extends App {
println("Welcome to CodeJet:) Developed by Paras Jain")
}`,
rust:`fn main() {
println!("Welcome to CodeJet:) Developed by Paras Jain");
}`,
ruby:`puts "Welcome to CodeJet:) Developed by Paras Jain"`,
r:`cat("Welcome to CodeJet:) Developed by Paras Jain")`,
php:`<?php
echo "Welcome to CodeJet:) Developed by Paras Jain";
?>`,
sql:`SELECT 'Welcome to CodeJet:) Developed by Paras Jain' AS message;`
  // ... add default codes for other languages
};

const EditorWindow = ({ onChange, language, defaultCode }) => {
  const handleEditorChange = (value) => {
    onChange(value);
  };

  const code = defaultCode || '';

  return (
    <div className="devEditorContainer">
      <Editor
        height="80vh"
        width={`100%`}
        language={language?.value || 'javascript'}
        value={code}
        theme="vs-dark"
        onChange={(value) => {
          handleEditorChange(value);
        }}
      />
    </div>
  );
};

export default EditorWindow;



