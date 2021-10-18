export default function ProgressBar({progress}){
    return (
        <div className='progress' style={{border:'gray solid 1px'}}>
            <div className='has-background-primary' style={{
                height:'100%',
                width:`${progress ?? 0}%`,
                transition : '.5s'
            }}/>
        </div>
    )
}