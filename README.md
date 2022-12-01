# Simple React Accordion

## How to use

```
<Faq 
  faqs={faqs}
  multipleOpen
  defaultOpen={0}
/>
```

## Params

<table>
  <tr>
    <th>Params</th>
    <th>Type</th>
    <th>Value</th>
  </tr>
  <tr>
    <td>faqs</td>
    <td>Array</td>
    <td>Array of objects <br> 
    <pre>
{
  question: string, 
  answer: string
}</pre></td>
  </tr>
  <tr>
    <td>multipleOpen</td>
    <td>Boolean</td>
    <td>default: <code>true</code></td>
  </tr>
  <tr>
    <td>defaultOpen</td>
    <td>Number</td>
    <td>default: <code>null</code></td>
  </tr>
  <tr>
    <td>onClick</td>
    <td>Function</td>
    <td>() => {}</td>
  </tr>
  <tr>
    <td>downSvg</td>
    <td>String</td>
    <td>default down svg icon would be used</td>
  </tr>
  <tr>
    <td>upSvg</td>
    <td>String</td>
    <td>default up svg icon would be used</td>
  </tr>
</table>

> Note: If you want to render other tags as answer use `template` as object field insted of answer.

```
{
  question: How to render other tags?
  template: `
    <p>Use <b>template</b> field insted of <s>answer</s></p>
    <ul>
      <li>random element</li>
    </ul>
  `
}
```

## Style Guide

- faqContainter - Top most div containing all faqs
- faqItem - Individual faq
- faqQuestion - Question along with icon indicator
- faqIcon - Image showing current faq state
- faqAnswer - Answer of question
- faqTemplate - Template using other html tags
