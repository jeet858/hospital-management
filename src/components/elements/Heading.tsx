import React from "react";
interface HeadingProps {
  FirstHeading: string;
  SecondHeading1: string;
  SecondHeading2: string;
  text: string;
}

export const Heading: React.FunctionComponent<HeadingProps> = (props) => {
  return (
    <div className="flex h-fit w-full flex-col items-center justify-center bg-transparent space-y-[4%] py-[2%]">
      <div className='font-["Lato"] text-lg font-medium text-black'>{props.FirstHeading}</div>
      <div className="flex flex-row space-x-2">
        <div className='font-["Lato"] text-4xl font-medium text-black'>{props.SecondHeading1}</div>
        <div className='font-["Lato"] text-4xl font-medium text-red-600'>
          {props.SecondHeading2}
        </div>
      </div>
      <div className='w-[60%] text-center font-["Lato"] text-xs font-light text-black'>
        {props.text}
      </div>
    </div>
  );
};

const ArticleHeading:React.FunctionComponent = () => {
  return (
    <div>
      <Heading
        FirstHeading='Read Professional Articles'
        SecondHeading1='Latest'
        SecondHeading2='Articles'
        text='Lorem ipsum dolor amet consectetur adipisicing eliteiuim sete eiusmod tempor incididunt ut 
        labore etnalom dolore magna aliqua udiminimate veniam quis norud.'
      />
    </div>
  )
}

export default ArticleHeading


