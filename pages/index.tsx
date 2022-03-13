import type { NextPage } from 'next'
import { Formik, useField } from 'formik'
import { TextField as MuiTextField, TextFieldProps } from '@mui/material'


interface Values {
  username: string
  password: string
}

const initialValues: Values = {
  username: '',
  password: ''
}

const TextField = (props: TextFieldProps) => {
  const [field, meta, helpers] = useField(props.name!)
  return (
    <MuiTextField {...field} {...props}/>
  )
}

const Home: NextPage = () => {
  return (
    <main>
      <div>
        <Formik
          initialValues={initialValues}
          onSubmit={(data, action) => {
            console.log(data)
          }}
        >
          {({handleSubmit}) => (
            <form onSubmit={handleSubmit}>
              <TextField name="username" label="Username" />
              <TextField name="password" label="Password" />
              <button type="submit">Submit</button>
            </form>
          )}
        </Formik>
      </div>
    </main>
  )
}

export default Home
