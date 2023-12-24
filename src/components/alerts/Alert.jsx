                //mandamos el tipo de objeto
const Alert = ({alert}) => {
  return (          //si existe alerta.error entonces 'from-red-400 to-red-600'
    <div className={`alert ${alert.error ? 'bg-danger' : 'bg-info'} text-center p-2 rounded-xl text-white font-weight-bold text-sm my-10`}>
        {alert.msg}
    </div>
  )
}

export default Alert