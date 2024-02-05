"""
NAME: Python script example
SYNOPSIS: Example Python script for RunScript GUI with commander library usage
WARNING: This is a warning message.
DANGER: This is a danger message.
TAGS: Example "RunScript Team" 
"""

import argparse


# When defining argparse, 'prog', 'description', and 'epilog' parameters in
# 'ArgumentParser' provide program info. If 'NAME', 'SYNOPSIS', and
# 'DESCRIPTION' metadata are at the script's start, they should take precedence.
parser = argparse.ArgumentParser(
    prog="Test Script",
    description="Demonstration of using various argument types with argparse.",
    epilog="This is an epilogue containing additional information about the program."
)

# Adding arguments
parser.add_argument("firstname", type=str, default="Martin1", help="Enter the first name")
parser.add_argument("lastname", type=str, default="Spanek", help="Enter the last name {id:test-substring-js}")
parser.add_argument("--string", type=str, required=True, default="Martin", help="String example")
parser.add_argument("--integer", type=int,default=42 , help="Integer example")
parser.add_argument("--float", type=float, help="Floating point number example.")
parser.add_argument("--file", type=argparse.FileType('r'), help="Path to the file for reading")
parser.add_argument("--boolean", type=bool, default=True, help="Boolean value example")
parser.add_argument('--verbose', action='store_true', help='If this switch is used, sets verbose to True.')

# Process the arguments
args = parser.parse_args()

# Print the arguments
print(f"Arguments: {args}")
