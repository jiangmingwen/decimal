/**
 * add 加法
 * @param arguments 需要做加法的所有参数
 * @returns 返回所有参数累加之和
 */
declare function add(arguments): number;

/**
 * sub 减法
 * @param arguments 要做减法的参数，第一个参数为被减数，其余参数都为减数
 * @returns 返回第一个参数减去后面所有参数的值
 */
declare function sub(arguments ): number;

/**
 * multi 乘法
 * @param arguments 需要做乘法的参数
 * @returns 返回所有参数相乘的结果
 */
declare function multi(arguments): number;

/**
 * div 除法
 * @param num1 被除数 
 * @param num2 除数 不能为0
 * @returns 返回 num1 / num2 的值
 */
declare function div(num1:number,num2:number): number;
