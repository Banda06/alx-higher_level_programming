#!/usr/bin/python3
for i in range(100):

    if i != 99:
        '''prints a combo of numbers'''
        print("{:d}{:d}".format(i // 10, i % 10), end=", ")
    else:
        print("{}".format(i))
