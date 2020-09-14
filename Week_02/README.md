学习笔记

AST 抽象语法树

LL 算法
LR 算法


四则运算

TokemNumber:
  1234567890

Operator: + - * /
whitespace: <SP>
LineTerminator: <LF><CR>

<Expression>::=
  <AdditiveExpression><EOF>

<AdditiveExpression>::=
  <MultiplicativeExpression>
  |<AdditiveExpression><+><MultiplicativeExpression>
  |<AdditiveExpression><-><MultiplicativeExpression>

<MultiplicativeExpression>::=
  <Number>
  |<MultiplicativeExpression><*><Number>
  |<MultiplicativeExpression></><Number>


加法是左右两个乘法组成的（就是算加法之前先把左边和右边的乘法算完）