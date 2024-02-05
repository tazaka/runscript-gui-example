#!/bin/bash
#
# RunScript GUI Info
#
# NAME: BASH script example
# SYNOPSIS: Krátky popis funkce
# DESCRIPTION: Dlouhý popis funkce
# AUTHOR: Martin Špánek
# VERSION: 1.0.0
# WARNING: Toto je varovná zpráva.
# DANGER: Toto je danger zpráva
# TAGS: Example "RunScript Team"

# init variables
a_val=""
b_val=""
c_flag=0

# Zpracování parametrů
while getopts ":a:b:c" opt; do
  case $opt in
    a)
      a_val=$OPTARG
      # name: Muj prvni parametr
      # description: Muj popis dasdsa dsadsa dasdas {id:rs-bash-subscript-example}
      # type: string
      # required: true
      # default: ahoj
      ;;
    b)
      b_val=$OPTARG
      # name: Muj druhý parametr
      # type: string     
      ;;
    c)
      c_flag=1
      # type: bool
      # default: true
      ;;
    \?)
      echo "Neplatný přepínač: -$OPTARG" >&2
      exit 1
      ;;
    :)
      echo "Přepínač -$OPTARG vyžaduje hodnotu" >&2
      exit 1
      ;;
  esac
done


echo "a_val = ${a_val}" 
echo "b_val = ${b_val}"
if [ "$c_flag" -eq 1 ]; then
  echo "c_val = true" 
else
  echo "c_val = false" 
fi
