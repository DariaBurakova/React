import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {signInAction} from "../store/profile/actions";
import {FormService} from "./FormService/formservice";
import {Link} from "react-router-dom";
import {logIn} from "../services/firebase";

export const Home =()=>{

    const [error,setError]=useState('')
    const [loading,setLoading]=useState(false)
    const handlerSignIn=async (email,password)=>{

        setLoading(true)
        try{
            await logIn(email,password)
        }catch(err){
            setError(err.message)
            console.log(err)
        }finally {
            setLoading(false)
        }
    }
    return(
        <div className=" d-flex justify-content-between container " style={{width:"1000px",margin:"50px auto"}}>
            <div className="col-sm-9 " style={{boxShadow:"0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"}}>
            <h2 className="card-title text-center p-3">Что такое React?</h2>
           <p className="px-3"> React — это инструмент для создания пользовательских интерфейсов.
            Его главная задача — обеспечение вывода на экран того, что можно видеть на веб-страницах.
            React значительно облегчает создание интерфейсов благодаря разбиению каждой страницы на небольшие фрагменты.
               Мы называем эти фрагменты компонентами.</p>
            <h2 className="card-title text-center p-3" >Что такое компонент React?</h2>
            <p className="px-3">Компонент React — это, если по-простому, участок кода, который представляет часть веб-страницы.
                Каждый компонент — это JavaScript-функция, которая возвращает кусок кода, представляющего фрагмент страницы.
                Для формирования страницы мы вызываем эти функции в определённом порядке, собираем вместе результаты вызовов
                и показываем их пользователю.React использует язык программирования, называемый JSX, который похож на HTML,
                но работает внутри JavaScript, что отличает его от HTML.Компоненты React можно помещать в другие компоненты.
            </p>
                <h2 className="card-title text-center p-3" >Функциональные компоненты</h2>
                <p className="px-3">Отдавайте предпочтение функциональным компонентам — они имеют более простой синтаксис.
                    В них отсутствуют методы жизненного цикла, конструкторы и шаблонный код. Они позволяют реализовать такую же логику, что и классовые компоненты,
                    но меньшими усилиями и более наглядным способом (код компонентов легче читать).
                    До тех пор, пока вам не потребуются предохранители, используйте функциональные компоненты.
                    Ментальная модель, которую надо держать в голове, будет намного проще.
                </p>
                <h2 className="card-title text-center p-3" >Согласованные (последовательные) компоненты</h2>
                <p className="px-3">Придерживайтесь одного стиля при создании компонентов. Помещайте вспомогательные функции в одно и тоже
                    место, используйте одинаковый экспорт (по умолчанию или по названию) и одинаковый подход к именованию компонентов.
                    У каждого подхода имеются свои преимущества и недостатки.
                    Неважно, как вы экспортируете компоненты, в самом низу или при определении, просто придерживайтесь одного правила.
                </p>
                <h2 className="card-title text-center p-3" >Названия компонентов</h2>
                <p className="px-3">Всегда именуйте компоненты. Это помогает анализировать трассировку стека
                    ошибки при использовании инструментов разработчика React.
                    Это также помогает определить, разработкой какого компонента вы в
                    данный момент занимаетесь.
                </p>
            </div>
            <div className="d-flex flex-column" >
                <FormService onSubmit={handlerSignIn} error={error} loading={loading}/>
                <Link  to="/signup"><button className="btn btn-outline-secondary" style={{}}>Sign Up</button></Link>
            </div>
        </div>
    )
}
//<button className="btn btn-outline-secondary"  onClick={handlerClick}>Sing IN</button>