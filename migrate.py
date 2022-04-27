with open('routes.js', 'r') as file:
    lines = file.readlines()

with open('output.txt', 'w') as output_file:
    for line in lines:
        if 'get(' in line or 'put(' in line or 'post(' in line or 'delete(' in line:
            method = line.split('(')[0].split('.')[-1]
            path = line.split('(')[1].split(',')[0][1:-1]
            handler = line.split(',')[1][:-3]

            print(method, path, handler)

            output_file.write(f'{method=} {path=} {handler=}\n')