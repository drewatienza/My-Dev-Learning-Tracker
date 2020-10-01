# Given the below class:
class Cat:
    species = 'mammal'

    def __init__(self, name, age):
        self.name = name
        self.age = age


#  1 Instantiate the Cat object with 3 cats
meowmeow = Cat('MeowMeow', 6)
felix = Cat('Felix', 10)
garfield = Cat('Garfield', 2)

#  2 Create a function that finds the oldes cat


def find_oldest_cat(*args):
    return max(args)


#  3 Print out: "The oldest cat is x years old."  x will be the oldes cat's age by using the function in #2
print(
    f"The oldest cat is {find_oldest_cat(meowmeow.age, felix.age, garfield.age)} years old.")
