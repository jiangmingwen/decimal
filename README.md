# decimal  

数字的加减乘除，处理了精度损失的问题。

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

| 方法（method）     | 参数（parameters） | 结果(result) | 备注(remark)                           |
| ------------------ | ------------------ | ------------ | -------------------------------------- |
| add ( arguments )  | num1,num2...       | number       | 所有参数相加                           |
| sub( arguments )   | num1,num2...       | number       | 第一个参数作为被减数，其余参数作为减数 |
| multi( arguments ) | num1,num2...       | number       | 所有参数相乘                           |
| div(num1,num2)     | num1,num2          | number       | num1 / num2                            |

