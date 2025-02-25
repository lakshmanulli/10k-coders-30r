#Write a program to display the multiplication table of a given number. First 20

num = int(input("enter the numbers"))

for i in range(1,num+1):
    print(f"Multiplication of{i} is:")
    for j in range(1,num+1):
        print(f"{i} * {j} = {i*j}")



#Write a program to calculate the factorial of a number using a while loop.
num = 5
sum = 1
while num>0:
    sum=sum*num
    num=num-1
print(sum)


#Print all numbers from 1 to 100 that are divisible by 3 and 5 using a for loop.
for i in range(1,100):
    if(i%3==0 and i%5==0):
        print(i,end=" ")