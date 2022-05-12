import json
from termcolor import colored
from prettytable import PrettyTable

with open('package.json') as json_file:
    data = json.load(json_file)
    run_path = data['scripts']['start'].split(' ')[-1]

with open(run_path, 'r') as file:
    for line in file.readlines():
        if ".use('/',require(" in line:
            routes_path = line.split('("')[-1][:-4] + '.js'
            break

with open(routes_path, 'r') as file:
    lines = file.readlines()

with open('output.txt', 'w') as output_file:
    table = PrettyTable(['Method', 'Path', 'Handler Function'])
    for line in lines:
        if 'get(' in line or 'put(' in line or 'post(' in line or 'delete(' in line:
            method = line.split('(')[0].split('.')[-1]
            path = line.split('(')[1].split(',')[0][1:-1]
            handler = line.split(',')[1][:-2]

            table.add_row([
                colored(method, "blue", attrs = ["blink", "bold"]),
                colored(path, "green", attrs = ["blink"]),
                colored(handler, "yellow", attrs = ["blink"]),
            ])
            
            

            output_file.write(f'{method=} {path=} {handler=}\n')

    print(table)