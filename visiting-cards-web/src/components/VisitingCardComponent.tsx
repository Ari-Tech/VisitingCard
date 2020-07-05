import * as React from 'react'

export interface IEntity {
    display: string
    type: string // work, home, mobile etc
}
export interface IChat {

}
export interface IVisitingCard{
    firstName: string
    lastName: string
    phones: IEntity[]
    emails:IEntity[]
    chat: {
        appName: string, // example skype
        id: string // example your skype id
    }
    selfDescription: string // one liner about you
    company: string
    address: string
    linkedInUrl: string
}

const VisitingCardComponent = (props: IVisitingCard) => {
    const renderPhoneSection = ()=>{
        let phones: any=[]
        props.phones.forEach((r:IEntity, index: number)=>{
            phones.push(<span>{r.display} <span className={'entity-type'}>{r.type}</span></span>)
            if(index < props.phones.length-1){
                phones.push(<span className={'breaker'}>|</span>)
            }
        })
        return (
            <div>
                {
                    phones
                }
            </div>
        )
    }
    const renderEmailSection = ()=>{
        let emails: any=[]
        props.emails.forEach((r:IEntity, index: number)=>{
            emails.push(<span>{r.display} <span className={'entity-type'}>{r.type}</span></span>)
            if(index < props.emails.length-1){
                emails.push(<span className={'breaker'}>|</span>)
            }
        })
        return (
            <div>
                {
                    emails
                }
            </div>
        )
    }
    const createLogo = ()=>{
        return props.firstName.substr(0,1)+props.lastName.substr(0,1)
    }
    return <div id={'visiting-card-dom'} className={'visiting-card-dom'}>
        <div className={"logo-section"}>
            {createLogo()}
        </div>
        <div className={'row'}>
            <div className={'col-12 text-center'}>
                <div className={'name-section'}>{props.firstName+" "+props.lastName}</div>
            </div>
            <div className={'col-12 text-center'}>
                <div className={'sub-section-big'}><i className="fa fa-building-o"></i> {props.company}</div>
            </div>
            <div className={'col-12 text-center'}>
                <div className={'sub-section-long-text'}>{props.selfDescription}</div>
            </div>

        </div>
        <div className={'row mt-3 ml-2'}>
            <div className={'col-12 text-left'}>
                <div className={'sub-section mt-3'}><span className={'span-style-entity'}>LinkedIn  </span> <span>
                    <div>{props.linkedInUrl}</div>
                </span></div>
            </div>
            <div className={'col-12 text-left'}>
                <div className={'sub-section mt-3'}>
                    <div className={'span-style-entity'}><i className="fa fa-phone"></i> Phone(s)</div>
                    {renderPhoneSection()}
                </div>
            </div>
            <div className={'col-12 text-left'}>
                <div className={'sub-section mt-3'}>
                    <div className={'span-style-entity'}><i className="fa fa-envelope-o"></i> Email(s)</div>
                    {renderEmailSection()}
                </div>
            </div>
            <div className={'col-12 text-left'}>
                <div className={'sub-section mt-3'}>
                    <span className={'span-style-entity'}><i className="fa fa-comment-o"></i> {props.chat.appName} </span>
                    <div>{props.chat.id}</div>
                </div>
            </div>
            <div className={'col-12 text-left'}>
                <div className={'sub-section mt-3'}>
                    <div className={'span-style-entity'}><i className="fa fa-address-card"></i> Address</div>
                    <div>
                        {props.address}
                    </div>
                </div>
            </div>
        </div>


    </div>
}

export {VisitingCardComponent}