# -*- coding: utf-8 -*-
import sys
from werkzeug import security
from flask import Flask, request,Response
import json
import os
UPLOAD_FOLDER = './'
ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])

app = Flask(__name__)
app.debug=True
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
@app.errorhandler(404)
def page_not_found(e):
    return '{"error":"404"}'
@app.errorhandler(400)
def page_not_found(e):
    return '{"error":"parms error"}'

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1] in ALLOWED_EXTENSIONS

@app.route('/',methods=['GET',"POST"])
def testapi():
    if request.method=='GET':
        a = Response("")
        a.headers['Access-Control-Allow-Origin'] = '*'
        a.data = json.dumps({"role":request.args.getlist('role')})
        return a
    if request.method=='POST':
        a = request
        '''file = request.files['file']
        if file and allowed_file(file.filename):
            filename = file.filename
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        '''
        a = Response("")
        a.headers['Access-Control-Allow-Origin'] = '*'
        start_date = request.form.getlist('start_date')
        end_date = request.form.getlist('end_date')
        sign_date = request.form.getlist('sign_date')
        name = request.form.getlist('name')
        reason = request.form.getlist('reason')
        b = u"我叫%s,我%s想请个假,从%s开始,到%s结束,敬礼-%s" %(name.pop(),reason.pop(),start_date.pop(),end_date.pop(),sign_date.pop())
        a.data = json.dumps({"r":b})
        return a
if __name__ == "__main__":
    try:
        port_number = int(sys.argv[1])
    except:
        port_number = 3005
    app.run(host='0.0.0.0', port=port_number)