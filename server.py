#!/usr/bin/env python
 
import SimpleHTTPServer, BaseHTTPServer, SocketServer, socket, time, sys, ssl
 
class ThreadedHTTPServer(SocketServer.ThreadingMixIn,
                         BaseHTTPServer.HTTPServer) :

    """
    New features w/r to BaseHTTPServer.HTTPServer:
    - serves multiple requests simultaneously
    - catches socket.timeout and socket.error exceptions (raised from
      RequestHandler)
    """
    def setDelay(self):
        try:
            delay = float(sys.argv[2])
        except IndexError:
            delay = 0.0
        return delay
    
    def __init__(self, *args):
        BaseHTTPServer.HTTPServer.__init__(self,*args)
        self.socket = ssl.wrap_socket (self.socket, keyfile='key.pem', certfile='cert.pem', server_side=True)
 
    def process_request_thread(self, request, client_address):
        """
        Overrides SocketServer.ThreadingMixIn.process_request_thread
        in order to catch socket.timeout
        """
        try:
            time.sleep(self.setDelay())
            self.finish_request(request, client_address)
            self.close_request(request)
        except socket.timeout:
            print 'Timeout during processing of request from',
            print client_address
        except socket.error, e:
            print e, 'during processing of request from',
            print client_address
        except:
            self.handle_error(request, client_address)
            self.close_request(request)
 
 
class TimeoutHTTPRequestHandler(SimpleHTTPServer.SimpleHTTPRequestHandler):
    """
    Abandon request handling when client has not responded for a
    certain time. This raises a socket.timeout exception.
    """
 
    # Class-wide value for socket timeout
    timeout = 3 * 60 
 
    def setup(self):
        "Sets a timeout on the socket"
        self.request.settimeout(self.timeout)
        SimpleHTTPServer.SimpleHTTPRequestHandler.setup(self)
 
 
def main():
    try:
        BaseHTTPServer.test(TimeoutHTTPRequestHandler, ThreadedHTTPServer)
        print "Delay time is %s" %self.delay
    except KeyboardInterrupt:
        print '^C received, shutting down server'
 
if __name__ == '__main__':
    main()