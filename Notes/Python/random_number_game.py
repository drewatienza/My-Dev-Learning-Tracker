from random import randint

#  generate a number 1-10
answer = randint(1, 10)

#  check that input is a number 1-10
while True:
    try:
        #  input from user?
        guess = int(input('Guess a number 1 through 10:\n'))

        if 11 > guess > 0:
            if guess == answer:
                print('You are a genius!!!')
                break
        else:
            print('The number you enter needs to be more than 0 and less than 11\n')
    except ValueError:
        print('Please enter a number')
        continue
