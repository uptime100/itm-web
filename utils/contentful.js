import contentfulAPI from '../providers/contentful'
export async function getContentfulData(contentId){
    let { data } = await contentfulAPI.get(`/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}/entries/${contentId}?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`)
    return data
}
export async function getAsset(contentId, assets){
    if (typeof assets === 'undefined'){
        assets = await getAssets()
    }
    let filteredAssets = assets.filter((asset)=>{
        return asset.sys.id === contentId
    })
    if (filteredAssets.length > 0){
        return filteredAssets[0]
    }
    else{
        return null
    }
}
export async function getAssets(){
    let items = []
    let skip = 0
    let limit = 100
    let data
    do{
        let response = await contentfulAPI.get(`/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}/assets/?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&skip=${skip}&limit=${limit}`)
        data = response.data
        items = items.concat(data.items)           
        skip += limit
    }while(data.items.length > 0)
    return items
}

export async function getEvents(){
    let {data} = await contentfulAPI.get(`/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=events`)
    return data
}
export async function getMedias(){
    let {data} = await contentfulAPI.get(`/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=mediaCoverage`)
    return data
}

export async function getPartners(){
    let {data} = await contentfulAPI.get(`/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=partners`)
    return data
}

export async function getTeamMembers(){
    let {data} = await contentfulAPI.get(`/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=staffProfiles`)
    return data
}

export async function getAdvisors(){
    let {data} = await contentfulAPI.get(`/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=advisors`)
    return data
}

export async function getContacts(){
    let {data} = await contentfulAPI.get(`/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=getInTouch`)
    return data
}


export async function attachLogo(entities, assets){
    for(let i=0;i<entities.length;i++){
    let entity = entities[i]
      if (entity.fields.logo){
        let logo = await getAsset(entity.fields.logo.sys.id, assets)
        if (logo){
          entities[i].logo = logo.fields.file.url
        }
      }
    }
  }

  export async function attachLeadImage(entities, assets){
    for(let i=0;i<entities.length;i++){
    let entity = entities[i]
      if (entity.fields.leadImage){
        let logo = await getAsset(entity.fields.leadImage.sys.id, assets)
        if (logo){
          entities[i].img = logo.fields.file.url
        }
      }
    }
  }
