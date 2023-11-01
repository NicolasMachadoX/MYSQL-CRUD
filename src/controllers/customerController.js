const controller = {};

controller.list = (req, res) =>{
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM customer', (err, customers)=>{

            if(err){
                res.json(err);
            }

            console.log(customers);
            res.render('customers', {
                data: customers
            })
        })


    })
}

controller.save = async (req, res)=>{
    try {
        const data = req.body;

       req.getConnection((err,conn)=>{
        conn.query('INSERT INTO customer set ?',[data])
       })

       res.redirect('/')

    } catch (error) {
        console.log(error);   
    }
}

controller.delete = async (req, res)=>{
    try {
     const {id} = req.params;

     req.getConnection((err, conn)=>{
        conn.query('DELETE FROM customer WHERE id = ?', [id])
     })

     res.redirect('/')

    } catch (error) {
        console.log(error);   
    }
}

controller.edit = async (req, res)=>{
    try {
     const {id} = req.params;

     req.getConnection((err, conn)=>{
        conn.query('SELECT * FROM customer WHERE id = ?', [id], (err,customers)=>{
            res.render('customer_edit',{
                data: customers[0]
             });
        });
     });

    } catch (error) {
        console.log(error);   
    }
}

controller.update = async (req, res)=>{
    try {
     const {id} = req.params;
     const newCustomer = req.body;
     req.getConnection((err, conn)=>{
        conn.query('UPDATE customer set ? WHERE id = ?', [newCustomer,id], (err,customers)=>{
            res.redirect('/');
        });
     });

    } catch (error) {
        console.log(error);   
    }
}
module.exports = controller;