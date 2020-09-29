#  Print out the highest even number from a given list

my_list = [10, 2, 15, 45, 110, 83, 92, 4, 51, 63]


def highest_even(li):
    evens = []
    for item in li:
        if item % 2 == 0:
            evens.append(item)
    return max(evens)


print(highest_even(my_list))
