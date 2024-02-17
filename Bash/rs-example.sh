#!/bin/bash

# NAME: Bash Script Example
# SYNOPSIS: Example Bash script for demonstrating RunScript GUI functionality.
# DESCRIPTION: This text serves as an example of an extensive comment embedded within a Bash script, aimed at providing users with a detailed description and explanation of the script's functionality. The comment delves into the explanation of various sections of the script, the methods, and commands employed, and how these elements collaborate to achieve the script's final objective. It includes practical usage examples, tips for performance optimization, and suggestions for potential enhancements or modifications to cater to specific user requirements. Beyond technical aspects, the comment may also encompass contextual information, such as the rationale behind the script's creation, its benefits, and potential real-world applications. The goal is to equip the reader with a deep understanding of the script, enable easy modification and adaptation of the script for their own projects, and promote the adoption of best practices in scripting.
# AUTHOR: RunScript Team
# VERSION: 1.0
# WARNING: This script includes a warning message for users to proceed with caution.
# DANGER: This script may perform actions that could potentially be harmful if not used carefully.
# TAGS: Example "RunScript Team"


# init variables
a_val=""
b_val=""
c_flag=0


while getopts ":a:b:c" opt; do
  case $opt in
    a)
      # Store the value provided with the -a switch in the 'a_val' variable.
      a_val=$OPTARG
      # name: First required argument
      # description: Argument with default value "hello". It serves as an example of how to use this script.
      # type: string
      # required: true
      # default: hello
      ;;
    b)
      # Store the value provided with the -b switch in the 'b_val' variable.
      b_val=$OPTARG
      # name: Substring argument
      # description: This parameter is used for passing a substring. It includes a long description and an ID for subscript selection. {id:rs-bash-subscript-example}
      # type: string
      ;;
    c)
      # Set the 'c_flag' variable to 1 if the -c switch is used.
      c_flag=1
      # name: Boolean argument
      # type: bool
      # default: false
      ;;
    \?)
      # Inform the user about an invalid switch and terminate the script.
      echo "Invalid option: -$OPTARG" >&2
      exit 1
      ;;
    :)
      # Inform the user that the switch requires a value and terminate the script.
      echo "Option -$OPTARG requires a value." >&2
      exit 1
      ;;
  esac
done

# Print the values set by the switches.
echo "Value of a: ${a_val:-hello}"  # Uses the default value "hello" if a_val is unset
echo "Value of b: ${b_val}"
if [ "${c_flag}" -eq 1 ]; then
  echo "c_flag is set to true"
else
  echo "c_flag is set to false"
fi