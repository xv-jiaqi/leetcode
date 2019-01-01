injsArr=()
kkxujqArr=()
linningmiiArr=()
zy445566Arr=()

function getdirfile() {
  for file in $1
  do
      if test -f $file
      then
          dirArr=(${dirArr[*]} $file)
      else
          for subfile in $file/*
          do
              if test -f $subfile
              then
                  dirArr=(${dirArr[*]} $subfile)
              fi
          done
      fi
  done
}

getdirfile '../answer/*'

for ansFile in ${dirArr[@]}
do
  fileName=`echo $ansFile | grep -E -o -i '[[:digit:]]+.+\.[[:alpha:]]+$'`

  #echo "$fileName"

  if [[ $fileName =~ "inJs" ]]; then
      injsArr=(${injsArr[@]} $fileName)
  fi

  if [[ $fileName =~ "kkxujq" ]]; then
      kkxujqArr=(${kkxujqArr[@]} $fileName)
  fi

  if [[ $fileName =~ "linningmii" ]]; then
      linningmiiArr=(${linningmiiArr[@]} $fileName)
  fi

  if [[ $fileName =~ "zy445566" ]]; then
      zy445566Arr=(${zy445566Arr[@]} $fileName)
  fi
done

function func1(){
  arr="$1"
  file='.answer-log'

  for i in ${arr[@]}; do
    echo ${i} >> $file
  done
}

resFile='.answer-log'
echo '' > $resFile

echo -e "\n总共作答: ${#injsArr[*]}个" >> $resFile
func1 "${injsArr[*]}"

echo -e "\n总共作答: ${#kkxujqArr[*]}个" >> $resFile
func1 "${kkxujqArr[*]}"

echo -e "\n总共作答: ${#linningmiiArr[*]}个" >> $resFile
func1 "${linningmiiArr[*]}"

echo -e "\n总共作答: ${#zy445566Arr[*]}个" >> $resFile
func1 "${zy445566Arr[*]}"
