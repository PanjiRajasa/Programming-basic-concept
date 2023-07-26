# Basic Python
# 1. Variable

x = 1
y = 5
z = 9

# 2. Conditional statements

if x != y:
    print(x)
elif z == 9:
    print(z)
else:
    print(y)

# 3. for and while loops

index = 1
while index < z:
    index += 1
    print(index)

i = 1
for i in range(10, 1):
    print(i)

# 4. Data types

x = "string"
y = 1  # integer
z = 1.01  # float
a = 1j  # complex
d = ["data", "data", "data"]  # list
b = ("data", "data", "data")  # tuple
c = range(1)  # range
r = {"head": "child", "head2": "child", "head3": "child"}  # dict
f = {"data", "data", "data"}  # set
w = True  # bool


# 5. function

def hello(parameter=1):
    parameter += 1
    print(parameter)


hello(5)
