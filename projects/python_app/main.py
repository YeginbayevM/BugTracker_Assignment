def calculate_average(numbers):
    return sum(numbers) / len(numbers)

def login(username, password):
    if username == "admin" and password == "12345":
        return True
    return False

print(get_user_data())

if __name__ == "__main__":
    print(calculate_average([]))