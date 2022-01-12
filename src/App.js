
import './App.css';

function App() {
  return (
    <div className="App">
       <div className="form">
        <form action="#" method="get">

            <div className="heading">
                <label>AK GAMMING LOGIN FORM</label>
            </div>


            <div className="fillup">
                <table border="0">
                    <tr>
                        <td>
                            <label htmlFor="">E-mail</label>
                        </td>
                        <td>
                            <input type="email" name="email" id="email" placeholder="ak_gamming_08@Email.com " required/>
                        </td>
                        <td>
                            <label htmlFor="">Password</label>
                        </td>
                        <td>
                            <input type="password" name="" id="password" placeholder="enter a strong password" required/>
                        </td>
                        <td>
                            <button onclick="js()">SUBBMIT</button>

                        </td>
                    </tr>
                </table>
            </div>

        </form>
    </div>
    </div>
  );
}

export default App;
