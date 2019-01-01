# Write your MySQL query statement below
select IFNULL((select Salary  from Employee GROUP BY Salary  order by Salary desc limit 1,1),null) as SecondHighestSalary;

