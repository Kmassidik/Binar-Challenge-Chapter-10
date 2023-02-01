import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import LogoBinar from "../components/images/Binar.png"

export default function Home() {
  return (
    <div>
       <img
       src='https://cdn.pixabay.com/photo/2015/04/18/11/12/pale-728606_1280.jpg' alt="Background Image"
       style={{height:'1800px'}}/>
      <div className="DashboardBackground">
        <div className="position-absolute top-50 start-50 translate-middle">
          <Card style={{widht: '500px'}}>
            <img 
            src={LogoBinar.src}
            alt="gambar welcome"
            widht="400"
            height="500"/>
            <Card.Body>
              <Card.Text className="text-black d-flex justify-content-center">
                  Welcome To Binar Game
              </Card.Text>
              <Card.Text className="text-black d-flex justify-content-center">
                Enjoy Us!
              </Card.Text>
              <Card.Text className="text-black d-flex justify-content-center">
                Please Login or Signup First
              </Card.Text>
              <Button className="d-flex justify-content-center mt-3" href="/login" variant="dark" size="md">
                Login
              </Button>
              <Button className="d-flex justify-content-center mt-3" href="/register" variant="dark" size="md">
                Signup
              </Button>
            </Card.Body>
          </Card> 
        </div>

      </div>
    </div>
  )
}