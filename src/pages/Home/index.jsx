import React from 'react'
import Card from '../../components/Cards'

const Home = () => {
    return (
        <main className="board">

            <div className="container">

                <div className="boardWrapper">

                    <Card
                        title="Gözləmədə"
                        count={3}
                        color="#64748B"
                    />

                    <Card
                        title="İcra olunur"
                        count={2}
                        color="#F59E0B"
                    />

                    <Card
                        title="Tamamlandı"
                        count={1}
                        color="#10B981"
                    />

                </div>

            </div>

        </main>

    )
}

export default Home
