import BaseHTTPServer, SimpleHTTPServer
import ssl

httpd = BaseHTTPServer.HTTPServer(('localhost', 443), SimpleHTTPServer.SimpleHTTPRequestHandler)
httpd.socket = ssl.wrap_socket (httpd.socket, keyfile='key.pem', certfile='cert.pem', server_side=True)
print ('iniciando')
httpd.serve_forever()
print('terminando')
