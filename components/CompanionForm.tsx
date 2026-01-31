"use client"
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import {z} from 'zod'
import {useForm} from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { subjects } from '@/constants'
import { Textarea } from './ui/textarea'

const formSchema= z.object({
    name: z.string().min(2,{message: "Companion is reuired."}),
    subject: z.string().min(2,{message: "Subject is reuired."}),
    topic: z.string().min(2,{message: "Topic is reuired."}),
    voice: z.string().min(2,{message: "Voice is reuired."}),
    style: z.string().min(2,{message: "Style is reuired."}),
    duration: z.coerce.number().min(2,{message: "Duration is required"}),
})
const CompanionForm = () => {
    const form=useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues:{
            name:"",
            subject:"",
            topic:"",
            voice:"",
            style:"",
            duration:15,
        }
    })

    const onSubmit=(values:z.infer<typeof formSchema>)=>{
        console.log(values);
    }
  return (
    <Form {...form}>
        <form className='space-y-8' onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
            name="name"
            control={form.control}
            render={({field})=>(
                <FormItem>
                    <FormLabel>Companion name</FormLabel>
                    <FormControl>
                        <Input
                        placeholder='Enter the companion name'
                        {...field}
                        className='input'
                        />
                    </FormControl>
                    <FormMessage/>
                </FormItem>
            )}
            />
            <FormField
            name='subject'
            control={form.control}
            render={({field})=>(
                <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                        <Select
                            onValueChange={field.onChange}
                            value={field.value}
                            defaultValue={field.value}
                        >
                            <SelectTrigger className='input capitalize'>
                                <SelectValue placeholder="Select the subject"/>
                            </SelectTrigger>
                            <SelectContent>
                                {subjects.map((subject)=>(
                                    <SelectItem value={subject} key={subject} className="capitalize">
                                        {subject}
                                    </SelectItem>
                                ))}
                            </SelectContent>

                        </Select>
                    </FormControl>
                    <FormMessage/>
                </FormItem>
            )}
            />
            <FormField
            name="topic"
            control={form.control}
            render={({field})=>(
                <FormItem>
                    <FormLabel>What should the companion help with?</FormLabel>
                    <FormControl>
                        <Textarea
                        placeholder='Ex. Derivates & Integrals'
                        {...field}
                        className='input'
                        />
                    </FormControl>
                    <FormMessage/>
                </FormItem>
            )}
            />
            <FormField
            name='voice'
            control={form.control}
            render={({field})=>(
                <FormItem>
                    <FormLabel>Voice</FormLabel>
                    <FormControl>
                        <Select
                            onValueChange={field.onChange}
                            value={field.value}
                            defaultValue={field.value}
                        >
                            <SelectTrigger className='input'>
                                <SelectValue placeholder="Select the voice"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value='male'>
                                    Male
                                </SelectItem>
                                <SelectItem value='female'>
                                    Female
                                </SelectItem>
                            </SelectContent>

                        </Select>
                    </FormControl>
                    <FormMessage/>
                </FormItem>
            )}
            />
            <FormField
            name='style'
            control={form.control}
            render={({field})=>(
                <FormItem>
                    <FormLabel>Style</FormLabel>
                    <FormControl>
                        <Select
                            onValueChange={field.onChange}
                            value={field.value}
                            defaultValue={field.value}
                        >
                            <SelectTrigger className='input'>
                                <SelectValue placeholder="Select the style"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value='formal'>
                                    Formal
                                </SelectItem>
                                <SelectItem value='casual'>
                                    Casula
                                </SelectItem>
                            </SelectContent>

                        </Select>
                    </FormControl>
                    <FormMessage/>
                </FormItem>
            )}
            />
            <FormField
            name="duration"
            control={form.control}
            render={({field})=>(
                <FormItem>
                    <FormLabel>Estimated session duration in minutes</FormLabel>
                    <FormControl>
                        <Input
                        type='number'
                        placeholder='15'
                        {...field}
                        className='input'
                        />
                    </FormControl>
                    <FormMessage/>
                </FormItem>
            )}
            />
            <Button type='submit' className='w-full cursor-pointer'>Build Your Companion</Button>
        </form>
    </Form>
  )
}

export default CompanionForm
