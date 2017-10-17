# -*- coding: utf-8 -*-
import status
import baseState
import sqlite3
from tornado import web, escape, ioloop, httpclient, gen

conn = sqlite3.connect('backoffice.db')
conn.text_factory = str
c = conn.cursor()

state = baseState.initialState()

def create_table():
	c.execute('CREATE TABLE IF NOT EXISTS state(unix REAL, setState TEXT)')

def update(newState):
	c.execute('SELECT * FROM state')
	c.execute('DELETE FROM state WHERE unix = 2')
	
	unix = 2
	setState =  newState
	c.execute("INSERT INTO state (unix, setState) VALUES (?, ?)", (unix, "{}".format(setState)))

	conn.commit()

def read_from_db():
	c.execute('SELECT * FROM state')
	data = c.fetchall()
	mydata = data[0]
	myJson = mydata[1]
	return myJson

create_table()

class BaseHandler(web.RequestHandler):

    def set_default_headers(self):
        print "setting headers!!!"
        self.set_header("Access-Control-Allow-Origin", "*")
        self.set_header("Access-Control-Allow-Headers", "x-requested-with")
        self.set_header("Access-Control-Allow-Method", "POST, GET, OPTIONS")

    def options(self):
        # no body
        self.set_status(204)
        self.finish()

class StateData(BaseHandler):
	SUPPORTED_METHODS = ("GET")
	STATE_ID = 1

	def get(self, id):
		if int(id) is not self.__class__.STATE_ID:
			self.set_status(status.HTTP_404_NOT_FOUND)
			return

		#response = state
		response = read_from_db()
		self.set_status(status.HTTP_200_OK)
		self.write(response)

class postStateData(BaseHandler):
	SUPPORTED_METHODS = ("POST")
	STATE_ID = 1

	def post(self, id):
		if int(id) is not self.__class__.STATE_ID:
			self.set_status(status.HTTP_404_NOT_FOUND)
			return

		update(self.request.body)
		state = escape.json_decode(self.request.body)
		response = state
		#response = "you got a response"
		self.set_status(status.HTTP_200_OK)
		self.write(response)

application = web.Application([
    (r"/StateData/([0-9]+)", StateData),
    (r"/postStateData/([0-9]+)", postStateData)
], debug=True)

if __name__ == "__main__":
    port = 8888
    print("Listening at port {0}".format(port))
    application.listen(port)
    ioloop.IOLoop.instance().start()

c.close()
conn.close()