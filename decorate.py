import datetime


def time_function(function_to_decorate):

    def decorate(*args):
        start_time = datetime.datetime.now()
        res = function_to_decorate(*args)
        print(datetime.datetime.now() - start_time)
        return res

    return decorate


@time_function
def factorial(n):
    return 1 if n <= 1 else n * factorial(n - 1)


factorial(100)
