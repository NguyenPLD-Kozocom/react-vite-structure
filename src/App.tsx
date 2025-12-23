import { Label, Button } from '~/components/ui'

function App() {
  return (
    <>
      <Label variant='h1' className='font-bold text-xl mb-3'>
        Components
      </Label>
      <div className='mb-3'>
        <Label variant='h2' className='font-bold text-base mb-2'>
          1. Button
        </Label>
        <div className='flex gap-2 flex-col border-dashed w-fit border-gray-150 rounded-md p-2 border'>
          <div className='flex gap-2'>
            <Button>Click me</Button>
            <Button size='lg'>Click me</Button>
          </div>
          <div className='flex gap-2'>
            <Button variant='secondary'>Click me</Button>
            <Button variant='secondary' size='lg'>
              Click me
            </Button>
          </div>
        </div>
      </div>
      <div className='mb-3'>
        <Label variant='h2' className='font-bold text-base mb-2'>
          2. Label
        </Label>
        <div className='flex gap-2 flex-col border-dashed w-fit border-gray-150 rounded-md p-2 border'>
          <Label variant='link' href='https://www.google.com'>
            Click me
          </Label>
        </div>
      </div>
    </>
  )
}

export default App
