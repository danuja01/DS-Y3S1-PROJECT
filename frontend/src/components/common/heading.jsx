import { twMerge } from 'tailwind-merge'

const Heading = ({ children, ...props }) => {
  return (
    <h1 {...props} className={twMerge('text-3xl font-bold', props.className)}>
      {children}
    </h1>
  )
}

export default Heading
