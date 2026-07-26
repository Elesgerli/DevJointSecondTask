import React from 'react'
import Card from '../../components/Cards'

const Home = () => {
    return (
        <main className="board">

            <div className="container">

                <div className="boardWrapper">

                    <Card
                        title="Gözləmədə"
                    
                            status="todo"
                        color="#64748B"
                    />

                    <Card
                        title="İcra olunur"
                   
                         status="progress"
                        color="#F59E0B"
                    />

                    <Card
                        title="Tamamlandı"
                   
                           status="done"
                        color="#10B981"
                    />

                </div>

            </div>

        </main>

    )
}

export default Home
