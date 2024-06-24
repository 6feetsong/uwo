import csv
import json
import os, shutil
import logging

input_file_name = "resource/uwo.csv"
output_path = "../src/resource"
output_data = output_path + "/data.json"

logger = logging.getLogger()

with open(input_file_name, "r", encoding="cp949", newline="") as input_file:
  reader = csv.reader(input_file)
  
  logger.info('open file')
  
  result = []
  for cols in reader:
    d = {
      'content': cols[0],
      'label': cols[1]
    }
    logger.info(d)
    result.append(d)
    

  # 영문 리소스 파일 저장
  with open(output_data, "w", encoding="utf-8", newline="") as output_file:
    output_file.write(json.dumps(result, indent=2, ensure_ascii=False))
