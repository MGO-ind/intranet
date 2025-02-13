import { Command } from 'cmdk';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { FiEye, FiLink, FiLogOut, FiPhone, FiPlus } from 'react-icons/fi';

export const CommandMenu = ({
        open, 
        setOpen,
    }: {
        open: boolean;
        setOpen: Dispatch<SetStateAction<boolean>>;
    }) => {
        const [value, setValue] = useState("");


  // Toggle the menu when ⌘K is pressed
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  return (
    <Command.Dialog 
    open={open} 
    onOpenChange={setOpen} 
    label="Global Command Menu"
    className='fixed inset-0 bg-stone-950/50'
    onClick={() => setOpen(false)}
    >
      <div onClick={(e) => e.stopPropagation()} className='bg-white rounded shadow-xl border-stone-300 border overflow-hidden w-full max-w-lg mx-auto mt-12'>
      <Command.Input
      value={value}
      onValueChange={setValue}
      placeholder='Que estas buscando?'
      className='relative border-b border-stone-300 p-3 text-lg w-full placeholder:text-stone-400 focus:outline-none' />
      <Command.List className="p-3">
        <Command.Empty>No se encontraron resultados para: {""}
            <span className='text-blue-700'>"{value}"</span>
        </Command.Empty>

       
        </Command.List>
      </div>
    </Command.Dialog>
  )
}