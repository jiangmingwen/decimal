# decimal  

num add, subtract, multiply and divide, No loss of accuracy

### usage

```
import * as Decimal from '@jay/decimal';

1. 0.1 + 0.2;   // 0.30000000000000004
   Decimal.add(0.1,0.2);  //0.3
   Decimal.add(0.1,0.2,0.1);  //0.4
   
   
2. 0.7 - 0.3;  //0.39999999999999997
   Decimal.sub(0.7,0.3);  //0.4
   Decimal.sub(0.7,0.3,0.1); //0.3
   
   
3. 0.1 * 0.2;  //0.020000000000000004
   Decimal.multi(0.1,0.2);  //0.02
   Decimal.multi(0.1,0.2,0.5); //0.01
 
4. 0.3 / 0.4;  //0.7499999999999999
   Decimal.div(0.3,0.4);  //0.75	

```



#### API

|       method       |     parameters     |    result    | remark                           |
| ------------------ | ------------------ | ------------ | -------------------------------------- |
| add ( arguments )  | num1,num2...       | number       | all param add                           |
| sub( arguments )   | num1,num2...       | number       | first param as minuend，reset param as minuer |
| multi( arguments ) | num1,num2...       | number       | all param multiply                           |
| div(num1,num2)     | num1,num2          | number       | num1 / num2                            |

