const Section = ({ children }, ...props) => {
  return (
    <div {...props} className=" py-10 px-20 bg-gray-100 h-[40rem]">
      {children}
    </div>
  )
}

export default Section
